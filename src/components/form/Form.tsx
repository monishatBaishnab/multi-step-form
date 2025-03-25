import { ReactNode, useEffect, useRef } from "react";
import {
  FormProvider,
  useForm,
  Resolver,
  UseFormReset,
  DefaultValues,
  FieldValues,
} from "react-hook-form";

interface FormProps<T extends FieldValues> {
  onSubmit: (data: T, reset: UseFormReset<T>) => void;
  defaultValues?: DefaultValues<T>;
  resolver?: Resolver<T>;
  children: ReactNode;
}

const Form = <T extends FieldValues>({
  onSubmit,
  defaultValues,
  resolver,
  children,
}: FormProps<T>) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  // Ensure the methods object is typed correctly
  const methods = useForm<T>({
    ...(defaultValues ? { defaultValues } : {}),
    ...(resolver ? { resolver } : {}),
  });

  const onFormSubmit = async (data: T) => {
    await onSubmit(data, methods.reset);
  };

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods]);

  return (
    <FormProvider {...methods}>
      <form ref={formRef} onSubmit={methods.handleSubmit(onFormSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
