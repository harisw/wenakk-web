import PropTypes from 'prop-types';

const dummmyHighlights = [
  {
    filename: 'placeholder-1.webp',
    caption: 'Breakfast'
  },
  {
    filename: 'placeholder-2.webp',
    caption: 'Spicy'
  },
  {
    filename: 'placeholder-3.webp',
    caption: 'Chicken'
  },
  {
    filename: 'placeholder-4.jpg',
    caption: 'Holiday Series'
  },
];

const imageCaptionClass = "rounded-lg bg-orange-500 p-3 py-1 font-semibold tracking-wider text-white";
const ImageCard = ({filename, caption}) => {
  return (
    <div className="relative">
      <img src={"/"+filename} alt="" 
      style={{
        width: '11rem', height: '10rem', objectFit: 'cover' }}
        />
      <div className="absolute left-0 flex w-full items-center justify-center"
        style={{ bottom: '-10px'}}>
        <p className={imageCaptionClass}>{caption}</p>
      </div>
  </div>
  )
};

ImageCard.propTypes = {
  filename: PropTypes.string,
  caption: PropTypes.string
}

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h5 className="mt-6 text-xl font-bold tracking-wider">SIMPLE RECIPES MADE FOR</h5>
      <h5 className="font-semibold tracking-widest">real, actual, everyday life.</h5>
      <div className="relative mb-3">
        <img src="/placeholder.jpeg" alt="" style={{
          width: '26rem'
        }}/>
        <div className="absolute left-0 flex w-full items-center justify-center"
          style={{ bottom: '-10px'}}>
          <p className={imageCaptionClass}>MOST POPULAR</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {dummmyHighlights.map((dummy, index) => (
          <ImageCard key={index} filename={dummy.filename} caption={dummy.caption}/>
        ))}
      </div>

      <div className='flex flex-col items-center'>

      </div>
    </div>
  );
}

export default Home;
