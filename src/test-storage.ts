import { ValueUpdated as ValueUpdatedEvent } from "../generated/TestStorage/TestStorage"
import { ValueUpdated } from "../generated/schema"

export function handleValueUpdated(event: ValueUpdatedEvent): void {
  let entity = new ValueUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldValue = event.params.oldValue
  entity.newValue = event.params.newValue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
