import ContactForm from './_components/contact'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="space-y-4">
                <h1 className="font-bold text-6xl text-accent">Let's talk</h1>
                <p className="">Have any inquiries, greetings, or anything else? Feel free to reach out, we're keen to hear from here</p>
            </div>
            <ContactForm />
        </div>
    </div>
  )
}

export default Contact