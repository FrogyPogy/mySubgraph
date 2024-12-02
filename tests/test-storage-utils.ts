import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { ValueUpdated } from "../generated/TestStorage/TestStorage"

export function createValueUpdatedEvent(
  oldValue: BigInt,
  newValue: BigInt
): ValueUpdated {
  let valueUpdatedEvent = changetype<ValueUpdated>(newMockEvent())

  valueUpdatedEvent.parameters = new Array()

  valueUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldValue",
      ethereum.Value.fromUnsignedBigInt(oldValue)
    )
  )
  valueUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newValue",
      ethereum.Value.fromUnsignedBigInt(newValue)
    )
  )

  return valueUpdatedEvent
}
