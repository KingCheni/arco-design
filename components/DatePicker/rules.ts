import { Dayjs } from 'dayjs';

export type RuleTriggerType = 'change' | 'confirm';

export type RuleType = {
  /**
   * @zh 校验规则的错误提示信息
   * @en Error message for validation rule
   */
  message: string;
  /**
   * @zh 校验规则的回调函数
   * @en Callback function for validation rule
   */
  validator: (dates: Dayjs[], callback?: (error?: string) => void) => boolean | void;
  /**
   * @zh 校验触发时机，默认是 change 时触发
   * @en Validation trigger timing
   * @defaultValue confirm
   */
  trigger?: RuleTriggerType;
};

export type RangePickerRules = RuleType[];
