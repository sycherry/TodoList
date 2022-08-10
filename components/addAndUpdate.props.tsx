export interface AddAndUpdateProps {
  text: string
  disabled: boolean
  button: string
  addAndUpdateTodoList: () => void
  onChangeText: (state: any) => void
}
