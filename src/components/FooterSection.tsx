import { images } from '../constants/image.index'

function FooterSection() {
  return (
    <div className='p-2!'>
      <img src={images.footer} alt="Footer" />
      <p>© 2025 Hosain Ali. All rights reserved.</p>
    </div>
  )
}

export default FooterSection
