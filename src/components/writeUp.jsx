import ProfilePic from '../icons/ProfilePic.jpeg'

const WriteUpComponent = () => {
    return <div className='MainContent'>
    <div className='profile'>
      <img src={ProfilePic} />
    </div>
    <div className='WriteUp'>
        <i>&quot;Prince Mishra Sir is the leading Geography Optional Faculty for IAS presently associated with GS SCORE . Through his well diversified knowledge, he explains things in  simple and lucid manner along with maintaining the standard expected by UPSC&quot;</i>
    </div>
  </div>
}

export default WriteUpComponent;