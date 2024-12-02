import { EmailAuthForm } from "@/src/app/[locale]/auth/components/Form/common/EmailAuthForm";
import { PasswordAuthForm } from "@/src/app/[locale]/auth/components/Form/common/PasswordAuthForm";
import { PasswordCOnfirmationAuthForm } from "@/src/app/[locale]/auth/components/Form/common/PasswordConfirmationAuthForm";
import { PhoneAuthForm } from "@/src/app/[locale]/auth/components/Form/common/PhoneAuthForm";
import { UsernameAuthForm } from "@/src/app/[locale]/auth/components/Form/common/UsernameAuthForm";
import { Button } from "@/src/app/shared/components/buttons/Button";

export function Register() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-center">Lorem</h1>
            <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi, eum!
            </p>
            <div className="flex flex-col gap-2">
                <UsernameAuthForm />
                <EmailAuthForm />
                <PhoneAuthForm />
                <PasswordAuthForm />
                <PasswordCOnfirmationAuthForm />
                <Button type="submit">Lorem</Button>
            </div>
        </div>
    );
}
