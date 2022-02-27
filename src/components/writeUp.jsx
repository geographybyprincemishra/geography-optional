import ProfilePic from '../icons/ProfilePic.jpeg'

const WriteUpComponent = () => {
    return <div className='MainContent'>
    <div className='profile'>
      <img src={ProfilePic} />
    </div>
    <div className='WriteUp'>
        <i>&quot;Prince Mishra Sir is a renowned Geography Optional Faculty for UPSC CSE having more than 7 years of teaching experience and presently associated with GS SCORE.
          Sir is known for his in-depth knowledge of the subject and teaching complex Geography concepts in easy to understand manner.
          He Focuses on inculcating Geographical perspective among students through teaching, discussion of previous years questions of IAS mains and inter linkages of different Physical and Human Geography topics&quot;</i>
    </div>
  </div>
}

export default WriteUpComponent;