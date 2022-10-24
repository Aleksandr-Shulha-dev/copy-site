import { Request } from "express";

interface TypedRequestBody<T> extends Request {
  body: T;
}

interface MainFormGroup {
  firstName: string;
  email: string;
}

interface RegistrationFormGroup extends MainFormGroup {
  lastName: string;
  tel: string
}

export type { TypedRequestBody, MainFormGroup, RegistrationFormGroup }
