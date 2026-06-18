export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero */}
      <section className='bg-white py-16'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-6'>
            Never Miss a Certification Renewal Again
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            Track, renew, and stay compliant — built for construction and manufacturing tradespeople.
          </p>
          <a href='/certifications' className='inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition'>
            Get Started Free
          </a>
        </div>
      </section>

      {/* Features */}
      <section className='py-12 bg-white'>
        <div className='max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-2'>
          <div className='flex items-start space-x-4'>
            <div className='flex-shrink-0 text-indigo-600 text-2xl'>📋</div>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>Log Your Certifications</h3>
              <p className='text-gray-600'>Add OSHA, EPA, trade-specific licenses with expiration dates in seconds.</p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <div className='flex-shrink-0 text-indigo-600 text-2xl'>⏰</div>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>Automated Reminders</h3>
              <p className='text-gray-600'>Get email and SMS alerts weeks before your certification expires.</p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <div className='flex-shrink-0 text-indigo-600 text-2xl'>🔗</div>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>Quick Re‑enrollment Links</h3>
              <p className='text-gray-600'>One‑click access to renewal courses and provider websites.</p>
            </div>
          </div>
          <div className='flex items-start space-x-4'>
            <div className='flex-shrink-0 text-indigo-600 text-2xl'>🔒</div>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>Secure & Private</h3>
              <p className='text-gray-600'>Your data stays encrypted and never shared.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-indigo-50 py-16'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>
            Join thousands of tradespeople who trust CertTrack
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Start tracking your certifications today — no credit card required.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a href='/certifications' className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg flex-1 sm:px-8'>
              Start Free Trial
            </a>
            <a href='/certifications' className='border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg flex-1 sm:px-8'>
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}