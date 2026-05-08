import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";

type FormValues = {
  fullName: string;
  email: string;
};

const meta: Meta = {
  title: "Design System/Patterns/Forms"
};

export default meta;
type Story = StoryObj;

export const InputStates: Story = {
  render: () => (
    <div className="max-w-md space-y-4 p-6">
      <Input label="Default input" placeholder="Type here" />
      <Input label="With helper text" helperText="Helper text for this field" placeholder="Type here" />
      <Input label="With error" errorText="This value is required" hasError placeholder="Type here" />
      <Input label="Disabled" disabled value="Disabled value" readOnly />
    </div>
  )
};

function HookFormExampleComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: ""
    }
  });

  return (
    <form className="max-w-md space-y-4" onSubmit={handleSubmit(async () => undefined)}>
      <Input
        label="Full name"
        placeholder="Jane Doe"
        errorText={errors.fullName?.message}
        hasError={Boolean(errors.fullName)}
        {...register("fullName", { required: "Please provide a full name" })}
      />
      <Input
        label="Email"
        type="email"
        placeholder="jane@example.com"
        errorText={errors.email?.message}
        hasError={Boolean(errors.email)}
        {...register("email", {
          required: "Please provide an email",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please provide a valid email"
          }
        })}
      />
      <div className="flex items-center gap-3">
        <Button type="submit" isLoading={isSubmitting} loadingLabel="Submitting">
          Submit
        </Button>
        {isSubmitSuccessful ? <p className="text-sm text-success">Submitted successfully.</p> : null}
      </div>
    </form>
  );
}

export const ReactHookFormExample: Story = {
  render: () => (
    <div className="p-6">
      <HookFormExampleComponent />
    </div>
  )
};
