import Markdown from 'react-markdown';

export default function PostCard({ post }: { post: any }) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
      <Markdown>{post.content}</Markdown>
      <p className="text-sm text-gray-500 mt-2">🕒 {post.timestamp}</p>
    </div>
  );
}
