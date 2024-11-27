import { Html } from '@react-three/drei';

export function Loader3D() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mb-2" />
        <p className="text-sm font-medium">Loading Earth...</p>
      </div>
    </Html>
  );
}