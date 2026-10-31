import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,

} from "@/components/reui/number-field"

export function Pattern({field}) {
  return (
    <div className="w-full max-w-48">
      <NumberField defaultValue={5} min={0} max={100}>
       
        <NumberFieldGroup>

          <NumberFieldInput field={field}/>
        
        </NumberFieldGroup>
      </NumberField>
    </div>
  )
}