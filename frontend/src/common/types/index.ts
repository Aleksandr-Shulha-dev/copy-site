interface MainFormGroup {
  firstName: string;
  email: string;
}

interface RegistrationFormGroup extends MainFormGroup {
  lastName: string;
  tel: string
}

interface OptionData {
  id: string;
  country: string;
  number: string;
}

export type { MainFormGroup, RegistrationFormGroup, OptionData }