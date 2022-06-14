import { FC } from 'react'
import { Transition } from '@headlessui/react'
import { SuccessCircle } from '@components/icons'
import s from './Success.module.css'

interface Props {
  text: string
  isShown: boolean
}

const Success: FC<Props> = ({ text, isShown }) => {
  return (
    <Transition
      appear={true}
      show={isShown}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={s.root}
    >
      <SuccessCircle className={s.icon} />
      <p className={s.text}>{text}</p>
    </Transition>
  )
}

export default Success
