import { EmailAuthForm } from "@/src/app/[locale]/auth/components/Form/common/EmailAuthForm";
import { PasswordAuthForm } from "@/src/app/[locale]/auth/components/Form/common/PasswordAuthForm";
import { Button } from "@/src/app/shared/components/buttons/Button";

export function Login() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-center">Lorem</h1>
            <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi, eum!
            </p>
            <div className="flex flex-col gap-2">
                <EmailAuthForm />
                <PasswordAuthForm />
                <Button type="submit">Lorem</Button>
            </div>
        </div>
    );
}
