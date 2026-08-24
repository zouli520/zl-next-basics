import { UseBrickConf } from "@next-core/brick-types";
import { GeneralComplexOption } from "@next-libs/forms";
import {
  CascaderExpandTrigger,
  CascaderOptionType,
  FieldNamesType,
} from "antd/lib/cascader";
import { Rule, RuleObject } from "antd/lib/form";
import { StoreValue } from "antd/lib/form/interface";
import { OptionType } from ".";
import { CheckboxProps } from "antd";
import { TextAreaProps } from "antd/lib/input";
import { TimeRangePickerItemProps } from "../dynamic-form-item-v2/TimeRangePicker";

export enum ComponentType {
  INPUT = "input",
  INPUT_NUMBER = "inputNumber",
  INPUT_PASSWORD = "inputPassword",
  SELECT = "select",
  CASCADER = "cascader",
}

interface BasicProps {
  /**
   * 是否禁用状态
   */
  disabled?: boolean | ((row: Record<string, any>, index: number) => boolean);
  placeholder?: string;
}

export interface InputProps extends BasicProps {
  /**
   * 声明 input 类型，同原生 input 标签的 type 属性
   */
  type?: string;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 可以点击清除图标删除内容
   */
  allowClear?: boolean;
}

export interface InputNumberProps extends BasicProps {
  /**
   * 最大值
   */
  max?: number;
  /**
   * 最小值
   */
  min?: number;
  /**
   * 每次改变步数，可以为小数
   */
  step?: number | string;
  /**
   * 数值精度
   */
  precision?: number;
}

export interface InputPasswordProps extends BasicProps {
  /**
   * 是否显示切换按钮
   */
  visibilityToggle?: boolean;
}

export interface SelectProps extends BasicProps {
  /**
   * 可以点击清除图标删除内容
   */
  allowClear?: boolean;
  /**
   * 设置 Select 的模式为多选或标签
   */
  mode?: "multiple" | "tags";
  /**
   * 候选项列表
   */
  options:
    | GeneralComplexOption<string | number>[]
    | GeneralComplexOption<string | number>[][]
    | ((
        row: Record<string, any>,
        index: number
      ) =>
        | GeneralComplexOption<string | number>[]
        | GeneralComplexOption<string | number>[][]);
  /**
   * 支持搜索
   */
  showSearch?: boolean;
  /**
   * 基于 `options` 列表中的某个字段进行分组显示
   */
  groupBy?: string;
  /**
   * 在 mode 为 `tags` 和 `multiple` 模式下自动分词的分隔符
   */
  tokenSeparators?: string[];
  /**
   * 最多显示多少个 tag
   */
  maxTagCount?: number | "responsive";
  /**
   * 下拉选项的渲染方式
   */
  popoverPositionType?: "default" | "parent";
  /**
   * 支持在文本后添加自定义构件 具体查看 [UseBrickConf](/next-docs/docs/api-reference/brick-types.usesinglebrickconf
   */
  suffix?: UseBrickConf;
  /**
   * 设置后置构件容器的样式
   */
  suffixStyle?: React.CSSProperties;
}

export interface CascaderProps extends BasicProps {
  /**
   * 是否支持清除
   */
  allowClear?: boolean;
  /**
   * 候选项
   */
  options: CascaderOptionType[] | CascaderOptionType[][];
  /**
   * 次级菜单的展开方式，可选 `click` 和 `hover`
   */
  expandTrigger?: CascaderExpandTrigger;
  /**
   * 浮层预设位置
   */
  popupPlacement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  /**
   * 支持搜索
   */
  showSearch?: boolean;
  /**
   * 自定义 options 中 label value children 的字段
   */
  fieldNames?: FieldNamesType;
}

export interface EditorProps {
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 语言模式
   */
  mode?: string;
  /**
   * 最小行数
   */
  minLines?: number;
  /**
   * 最大行数
   */
  maxLines?: number;
  /**
   * 主题
   */
  theme?: string;

  /**
   * 显示左侧区域槽
   */
  showGutter?: boolean;
  /**
   * 只读模式
   */
  readOnly?: boolean;
  /**
   * 显示行数
   */
  showLineNumbers?: boolean;
  /**
   * 显示复制按钮
   */
  showCopyButton?: boolean;
  /**
   * 显示展开按钮
   */
  showExpandButton?: boolean;
  /**
   * 是否开启自动补全
   */
  enableLiveAutocompletion?: boolean;
  /**
   * 显示打印边距
   */
  printMargin?: boolean;
  /**
   * 自定义自动补全
   */
  customCompleters?: string[];
}

export interface AutoCompleteProps extends BasicProps {
  /**
   * 是否支持清除
   */
  allowClear?: boolean;
  /**
   * 候选项
   */
  options: string[] | OptionType[];
  /**
   * 是否为追加模式
   */
  isAppendMode?: boolean;
}

export interface InputColumn {
  // type: ComponentType.INPUT;
  type: "input";
  props: InputProps;
}

export interface CheckboxColumn {
  type: "checkbox";
  props: CheckboxProps & { text: string };
}

export interface SelectColumn {
  // type: ComponentType.SELECT;
  type: "select";
  props: SelectProps;
}

export interface InputNumberColumn {
  // type: ComponentType.INPUT_NUMBER;
  type: "inputNumber";
  props: InputNumberProps;
}

export interface InputPasswordColumn {
  // type: ComponentType.INPUT_PASSWORD;
  type: "inputPassword";
  props: InputPasswordProps;
}

export interface CascaderColumn {
  // type: ComponentType.CASCADER;
  type: "cascader";
  props: CascaderProps;
}

export interface EditorColumn {
  type: "editor";
  props: EditorProps;
}

export interface AutoCompleteColumn {
  type: "autoComplete";
  props: AutoCompleteProps;
}

export interface TextAreaColumn {
  type: "textArea";
  props: TextAreaProps;
}

export interface DateRangePickerColumn {
  type: "timeRangePicker";
  props: TimeRangePickerItemProps;
}

export interface BasicColumn {
  /**
   * 表单项字段说明
   */
  label?: string;
  /**
   * 表单项字段名
   */
  name: string;
  /**
   * 表单项校验规则
   */
  rules?: ({ unique: boolean; message: string } & Rule & {
      message?: string;
      validator: (
        rule: RuleObject,
        value: StoreValue,
        callback: (error?: string) => void,
        fullValue: {
          formValue: Record<string, any>[];
          rowValue: Record<string, any>;
          rowIndex: number;
          column?: Column;
        }
      ) => Promise<void | any> | void;
    })[];
  /**
   * 表单项所占份额
   */
  flex?: string | number;
  /**
   * 表单项默认值
   */
  defaultValue?: any;
  /**
   * gridColumns 设置后，每个表单项所占的列数
   */
  span?: number;
  /**
   * 表单项提示信息
   */
  tooltip?: string;
  /**
   * 当该表单项的值变化时触发，返回需要联动更新的其他字段及其值。
   * 返回一个对象，key 为同行其他字段的 name，value 为要设置的值（传 null 清空）。
   * 返回 undefined/null/空对象表示不做联动。
   */
  onValuesChange?: (
    rowValue: Record<string, any>,
    rowIndex: number,
    fieldName: string
  ) => Record<string, any> | void;
}

export type Column = BasicColumn &
  (
    | InputColumn
    | InputNumberColumn
    | InputPasswordColumn
    | SelectColumn
    | CascaderColumn
    | EditorColumn
    | AutoCompleteColumn
    | CheckboxColumn
    | TextAreaColumn
    | DateRangePickerColumn
  );
