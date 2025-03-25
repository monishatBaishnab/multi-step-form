import { ReactNode, useEffect, useRef } from "react";
import {
  FormProvider,
  useForm,
  Resolver,
  UseFormReset,
  FieldValues,
  DefaultValues,
} from "react-hook-form";

interface FormProps {
  onSubmit: (data: FieldValues, reset: UseFormReset<FieldValues>) => void;
  defaultValues?: DefaultValues<FieldValues>;
  resolver?: Resolver<FieldValues>;
  children: ReactNode;
}

const Form = ({ onSubmit, defaultValues, resolver, children }: FormProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  // Use the correct type for useForm configuration
  const methods = useForm<FieldValues>({
    ...(defaultValues ? { defaultValues } : {}),
    ...(resolver ? { resolver } : {}),
  });

  const onFormSubmit = async (data: FieldValues) => {
    await onSubmit(data, methods.reset);
  };

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  return (
    <FormProvider {...methods}>
      <form ref={formRef} onSubmit={methods.handleSubmit(onFormSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
