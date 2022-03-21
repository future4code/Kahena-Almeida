import StoryCard from './StoryCard'

const stories = [
  {
    name: 'Kahena Mansano',
    src: 'https://i.postimg.cc/DftJL8GF/272872079-4889456481143636-7747770111810562335-n.jpg',
    profile:
      'https://i.postimg.cc/JzR277Pc/169433891-3926310210791606-8081478051711860050-n.jpg'
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy'
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk'
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p'
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf'
  }
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(story => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  )
}

export default Stories
