import { setIn } from 'final-form'

export const DEFAULT_MSG = 'Campo obrigatório'

export const validate = async (values: unknown, schema: any) => {
  if (typeof schema === 'function') schema = schema()

  try {
    await schema.validate(values, { abortEarly: false })
  } catch (e: any) {
    return e.inner.reduce(
      (errors: object, error: { path: string; message: any }) => {
        return setIn(errors, error.path, error.message)
      },
      {}
    )
  }
}
