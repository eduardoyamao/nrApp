
export class Externa {

    constructor(vaso_id?: number, numerovaso?: string, selectedescada?: string, selectedpio?: string, selectedpdc?: string,
        selectedfundacao?: string, selectedsustfix?: string, viacirculacaoobs?: string, selectedescadaobs?: string,
        selectedpioobs?: string, selectedpdcobs?: string, selectedfundacaoobs?: string, selectedSustfixobs?: string) {
  
      this.vaso_id = vaso_id;
      this.numerovaso = numerovaso;
      this.selectedescada = selectedescada;
      this.selectedpio = selectedpio;
      this.selectedpdc = selectedpdc;
      this.selectedfundacao = selectedfundacao;
      this.selectedsustfix = selectedsustfix;
      this.viacirculacaoobs = viacirculacaoobs;
      this.selectedescadaobs = selectedescadaobs;
      this.selectedpioobs = selectedpioobs;
      this.selectedpdcobs = selectedpdcobs;
      this.selectedfundacaoobs = selectedfundacaoobs;
      this.selectedSustfixobs = selectedSustfixobs;
    }
    public vaso_id: number;
    public numerovaso: string;
    public viacirculacao: string;
    public selectedescada: string;
    public selectedpio: string;
    public selectedpdc: string;
    public selectedfundacao: string;
    public selectedsustfix: string;
    public viacirculacaoobs: string;
    public selectedescadaobs: string;
    public selectedpioobs: string;
    public selectedpdcobs: string;
    public selectedfundacaoobs: string;
    public selectedSustfixobs: string;
  }