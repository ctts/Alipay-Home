export interface DataBoardItem {
  x: string[];
  y: DataValue[];
}

export interface DataValue {
  data: number[];
  name: string;
}

export interface SwitchProp {
  switchState: SwitchCase;
  onChange: Function;
}

export enum SwitchCase {
  Trading = 'trading',
  BalancePayments = 'balancePayments',
}

export interface ClinchData {
  deal: string;
  tickCount: number;
  refund: string;
}
export interface BalancePaymentData {
  balance: string;
  payment: string;
}
