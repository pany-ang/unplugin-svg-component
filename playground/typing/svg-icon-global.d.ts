
import '@vue/runtime-core'
declare module '@vue/runtime-core' {
  import type { PropType } from 'vue';
  export interface GlobalComponents {
    MySvgIcon: import("vue").DefineComponent<{
        name: {
            type: PropType<"icon-icon-addUser" | "icon-icon-barCode" | "icon-icon-card2" | "icon-logo" | "icon-common-icon-add" | "icon-common-icon-add3" | "icon-common-icon-addUser" | "icon-common-icon-addUsers" | "icon-common-icon-addx" | "icon-common-icon-apple" | "icon-common-icon-banner" | "icon-common-logo">;
            default: string;
            required: true;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: PropType<"icon-icon-addUser" | "icon-icon-barCode" | "icon-icon-card2" | "icon-logo" | "icon-common-icon-add" | "icon-common-icon-add3" | "icon-common-icon-addUser" | "icon-common-icon-addUsers" | "icon-common-icon-addx" | "icon-common-icon-apple" | "icon-common-icon-banner" | "icon-common-logo">;
            default: string;
            required: true;
        };
    }>>, {
        name: "icon-icon-addUser" | "icon-icon-barCode" | "icon-icon-card2" | "icon-logo" | "icon-common-icon-add" | "icon-common-icon-add3" | "icon-common-icon-addUser" | "icon-common-icon-addUsers" | "icon-common-icon-addx" | "icon-common-icon-apple" | "icon-common-icon-banner" | "icon-common-logo";
    }>;
  }
}
