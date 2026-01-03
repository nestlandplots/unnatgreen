import { Play } from 'lucide-react';
import type { Video } from '../data/projectData';

interface VideoPlayerProps {
  videos: Video[];
}

export default function VideoPlayer({ videos }: VideoPlayerProps) {
  if (videos.length === 0) return null;

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  return (
    <div className="space-y-8">
      {videos.map((video) => (
        <div key={video.id} className="bg-white rounded-3xl p-6 shadow-xl border-2 border-amber-200">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <Play className="w-6 h-6 mr-2 text-amber-600" />
              {video.title}
            </h3>
            {video.description && (
              <p className="text-gray-600">{video.description}</p>
            )}
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
            {video.video_url.match(/\.(mp4|webm|ogg)$/i) ? (
              <video
                controls
                className="w-full h-full"
                poster={video.thumbnail_url || undefined}
              >
                <source src={video.video_url} type={`video/${video.video_url.split('.').pop()}`} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={getEmbedUrl(video.video_url)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
