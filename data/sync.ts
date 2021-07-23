import {synchronize} from '@nozbe/watermelondb/sync';
import {database} from './database';
// your_local_machine_ip_address usually looks like 192.168.0.x
// on *nix system, you would find it out by running the ifconfig command
const SYNC_API_URL = 'http://<your_local_machine_ip_address>:3333/sync';
export async function sync() {
  await synchronize({
    database,
    pullChanges: async ({lastPulledAt}) => {
      const response = await fetch(SYNC_API_URL, {
        body: JSON.stringify({lastPulledAt}),
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }

      const {changes, timestamp} = await response.json();
      return {changes, timestamp};
    },
    pushChanges: async ({changes, lastPulledAt}) => {
      const response = await fetch(
        `${SYNC_API_URL}?lastPulledAt=${lastPulledAt}`,
        {
          method: 'POST',
          body: JSON.stringify(changes),
        },
      );
      if (!response.ok) {
        throw new Error(await response.text());
      }
    },
  });
}