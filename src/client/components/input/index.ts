import { withForm } from '@hocs/with-form'

import Password from './password'
import Checkbox from './checkbox'
import Textarea from './textarea'
import Select from './select'
import Field from './field'
import Radio from './radio'

export { Textarea, Password, Select, Field, Radio, Checkbox }

export const Form = {
  Password: withForm(Password),
  Textarea: withForm(Textarea),
  Checkbox: withForm(Checkbox, { type: 'checkbox' }),
  Select: withForm(Select),
  Field: withForm(Field),
  Radio: withForm(Radio, { type: 'radio' }),
}
