import React from 'react';
import './App.css';
// import VideoCard from './VideoCard';
import VideoCard from './VideoCard';
function App() {
  return (
    //BEM naming convention


    <div className="app">

      <div className="app__top">
        <img className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt=""
        />
        <h1>Reels</h1>


        {/* image at top - logo */}
        {/* Reels text */}
      </div>


      <div className="app__videos">
        {/* Container od app__videos */}
        {/* video */}
        <VideoCard
          channel='Muema'
          avatarSrc='https://lh3.googleusercontent.com/proxy/fqMVnXdWefo24WMiKOb7d5puy_4pQGzdcmX69i4VJS2bA4KeUcxdOJ6yt1HWd2he7Cd7ZBcsmSnivSSDBsVGV9ejQ8hAu1W_ZhQ80ULemrMCGYEnldLjrw'
          song='Test Song By - muema'
          url='https://d14pr3cu5atb0x.cloudfront.net/cms/Instagram-video-editor-for-making-a-video-for-instagram-cc83b2b5fe.mp4'
          likes={950}
          shares={30}
        />
        <VideoCard
          channel='Muema'
          avatarSrc='https://lh3.googleusercontent.com/proxy/fqMVnXdWefo24WMiKOb7d5puy_4pQGzdcmX69i4VJS2bA4KeUcxdOJ6yt1HWd2he7Cd7ZBcsmSnivSSDBsVGV9ejQ8hAu1W_ZhQ80ULemrMCGYEnldLjrw'
          song='Test Song By - muema'
          url='https://d14pr3cu5atb0x.cloudfront.net/cms/Instagram-video-editor-for-making-a-video-for-instagram-cc83b2b5fe.mp4'
          likes={950}
          shares={30}
        />
        <VideoCard
          channel='Muema'
          avatarSrc='https://lh3.googleusercontent.com/proxy/fqMVnXdWefo24WMiKOb7d5puy_4pQGzdcmX69i4VJS2bA4KeUcxdOJ6yt1HWd2he7Cd7ZBcsmSnivSSDBsVGV9ejQ8hAu1W_ZhQ80ULemrMCGYEnldLjrw'
          song='Test Song By - muema'
          url='https://d14pr3cu5atb0x.cloudfront.net/cms/Instagram-video-editor-for-making-a-video-for-instagram-cc83b2b5fe.mp4'
          likes={950}
          shares={30}
        />          <VideoCard
          channel='Muema'
          avatarSrc='https://lh3.googleusercontent.com/proxy/fqMVnXdWefo24WMiKOb7d5puy_4pQGzdcmX69i4VJS2bA4KeUcxdOJ6yt1HWd2he7Cd7ZBcsmSnivSSDBsVGV9ejQ8hAu1W_ZhQ80ULemrMCGYEnldLjrw'
          song='Test Song By - muema'
          url='https://d14pr3cu5atb0x.cloudfront.net/cms/Instagram-video-editor-for-making-a-video-for-instagram-cc83b2b5fe.mp4'
          likes={950}
          shares={30}
        />
      </div>

    </div>
  );
}

export default App;
