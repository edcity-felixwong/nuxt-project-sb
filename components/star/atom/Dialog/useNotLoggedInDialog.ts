import { MaybeRef } from "vue";
import { useDialog } from "primevue/usedialog";
import ErrorDialog from "./ErrorDialog.vue";

export function useNotLoggedInDialog(isError: MaybeRef<boolean> = true) {
  const dialog = useDialog();
  const open = () =>
    dialog.open(ErrorDialog, {
      onClose: () => {},
      props: {
        blockScroll: true,
        draggable: false,
        // header: "header",
        // footer: "footer",
        modal: true,
        closable: true,
      },
    });
  /** Listen to `isError`, pop up if true,
   * close it when if false, when it is resolved.
   */
  if (isRef(isError)) {
    watchEffect((onCleanup) => {
      const dialogInstance = isError.value ? open() : null;
      onCleanup(() => dialogInstance?.close());
    });
  } else if (isError) {
    open();
  }
}
