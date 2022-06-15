import { useState, useRef, useEffect } from 'react'

type ParentFn = (value: string) => void

type SubmitHandler = (
  value: string,
  setSubmitting?: (bool: boolean) => void,
  resetForm?: () => void
) => void

const useFakeRequestTimer = (parentFn: ParentFn) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const firstTimerRef = useRef<NodeJS.Timeout | undefined>()

  const handleSubmit: SubmitHandler = (value, setSubmitting, resetForm) => {
    setIsSubmitting(true)

    firstTimerRef.current = setTimeout(() => {
      setSubmitting && setSubmitting(false)
      resetForm && resetForm()
      setIsSubmitting(false)
      parentFn(value)
    }, 600)
  }

  useEffect(() => {
    return () => {
      clearTimeout(firstTimerRef.current)
    }
  }, [])

  return {
    isSubmitting,
    handleSubmit,
  }
}

export default useFakeRequestTimer
