export class Outcome{
  outcomeId:number;
  detail:string;
  amount: number;
  createdAt:Date;
  updatedAt:Date;

  constructor() {
    this.outcomeId=0;
    this.detail="";
    this.amount=0;
    this.createdAt=new Date();
    this.updatedAt=new Date();
  }

}
