import { useState } from 'react';
import Markdown from 'react-markdown';
import { encryptText } from '../utils/encrypt';

export default function Editor({ walletAddress }: { walletAddress: string | null }) {
  const [content, setContent] = useState('');
  const [encrypted, setEncrypted] = useState(false);
  const [preview, setPreview] = useState('');
  const [published, setPublished] = useState(false);

  const handleEncryptToggle = () => setEncrypted(!encrypted);
  const handlePreview = () => setPreview(encrypted ? encryptText(content) : content);
  const handlePublish = async () => {
    if (!walletAddress) {
      alert('Please connect your wallet first.');
      return;
    }
    const finalContent = encrypted ? encryptText(content) : content;
    console.log('Publishing with address:', walletAddress);
    console.log('Content:', finalContent);
    setPublished(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">FreedomCast Editor</h2>
      <textarea
        className="w-full h-40 p-2 border rounded"
        placeholder="Write your message here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex items-center mt-2">
        <input type="checkbox" checked={encrypted} onChange={handleEncryptToggle} className="mr-2" />
        <label>Encrypt message</label>
      </div>
      <div className="flex space-x-4 mt-4">
        <button onClick={handlePreview} className="bg-blue-600 text-white px-4 py-2 rounded">Preview</button>
        <button onClick={handlePublish} className="bg-green-600 text-white px-4 py-2 rounded">Publish</button>
      </div>
      {preview && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Preview</h3>
          <Markdown>{preview}</Markdown>
        </div>
      )}
      {published && (
        <div className="mt-6 text-green-600 font-semibold">
          ✅ Message published successfully (simulated)!
        </div>
      )}
    </div>
  );
}
