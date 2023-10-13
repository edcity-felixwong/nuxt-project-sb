import { defineComponent, h, ExtractPropTypes, DefineComponent } from 'vue';
import { Button as TButton, TdButtonProps } from "tdesign-vue-next/esm";
// import TTButton from "tdesign-vue-next/esm/button/button";
import TTButtonProp from "tdesign-vue-next/esm/button/props";
export { TTButtonProp as StarButtonProp }
// type ExtractProps<T> = T extends DefineComponent<infer P, any,any,any,any,any,any,any,any,any,any,any,any> ? P : never
// type t12312=ExtractProps<typeof TTButton>
// type t21312=typeof TTButton
// TButton.__defaults
// type PropType1 = InstanceType<typeof TButton>['$props']
// // type PropType2 = (typeof TButton).__defaults
type Clear<T> = {
    [P in keyof T]: T[P]
} & {}
// type qwr123 = Clear<TdButtonProps>
// type PropType3 = PropType<TdButtonProps>
// type t1413=Clear<ExtractPropTypes<typeof TTButtonProp>>
export default defineComponent({
    name: 'TryButton',
    props: TButton.props as unknown as typeof TTButtonProp,
    setup(props, { attrs, slots }) {
        /* https://stackoverflow.com/questions/69875273/non-function-value-encountered-for-default-slot-in-vue-3-composition-api-comp */
        return () => h(TButton, { ...props, ...attrs }, () => slots.default?.()) // If send `slots.default` instead, can it be non-function?
        // return () => <TButton {...attrs} {...props}>{slots}</TButton>
    }
})
// export default defineComponent({
//     name: 'TryButton',
//     // props: TButton.props as unknown as typeof TTButtonProp,
//     setup(props, { attrs, slots }) {
//         return () => h('div', {  }, slots.default?.())
//         // return () => <TButton {...attrs} {...props}>{slots}</TButton>
//     }
// })