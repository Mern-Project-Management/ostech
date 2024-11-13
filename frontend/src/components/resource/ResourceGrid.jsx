import React from 'react';
import { Card, CardContent } from "../Product/Card";

const VideoGrid = () => {
  const videos = [
    {
      id: 1,
      title: "Getting Started with React",
      youtubeId: "diAX3NrXiQw?si=9mK0D2wNy5dy6phN", // Replace with actual YouTube video ID
      duration: "12:34",
      views: "234K",
      channel: "React Tutorials"
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      youtubeId: "ytW2bhgKMn4?si=cDlnK6uibRjQG-T6",
      duration: "15:21",
      views: "186K",
      channel: "CSS Masters"
    },
    {
      id: 3,
      title: "Building Modern UIs",
      youtubeId: "ytW2bhgKMn4?si=cDlnK6uibRjQG-T6",
      duration: "08:45",
      views: "92K",
      channel: "UI/UX Hub"
    },
    {
      id: 4,
      title: "React Hooks Deep Dive",
      youtubeId: "diAX3NrXiQw?si=9mK0D2wNy5dy6phN",
      duration: "20:15",
      views: "145K",
      channel: "React Pro Tips"
    },
    {
      id: 5,
      title: "Responsive Design Patterns",
      youtubeId: "diAX3NrXiQw?si=9mK0D2wNy5dy6phN",
      duration: "16:30",
      views: "78K",
      channel: "Web Design Academy"
    },
    {
      id: 6,
      title: "State Management in React",
      youtubeId: "ytW2bhgKMn4?si=cDlnK6uibRjQG-T6",
      duration: "25:00",
      views: "167K",
      channel: "React Masters"
    }
  ];

  return (
    <div className="container relative mx-auto px-4 py-8">
        <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,0 80,0a40,40 0 1,0 -80,0' fill='none' stroke='%23333' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px'
                }}
            ></div>
      {/* <h2 className="text-2xl font-bold mb-6">Featured Resources</h2> */}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden hover:shadow-lg hover:shadow-[#1290ca]/50 hover:scale-105 transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative group">
                <iframe
             dsf     src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="w-full aspect-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 text-sm rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.channel}</p>
                <p className="text-gray-500 text-sm">{video.views} views</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
