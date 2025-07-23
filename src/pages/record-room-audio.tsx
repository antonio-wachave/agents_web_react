import { useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import { Navigate, useParams } from 'react-router-dom';

type RoomParams = {
  roomId: string;
};

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function';

export function RecordRoomAudio() {
  const params = useParams<RoomParams>();
  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  function stopRecording() {
    setIsRecording(false);

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop();
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  async function uploadAudio(audio: Blob) {
    const formData = new FormData();

    formData.append('file', audio, 'audio,webm');

    const response = await fetch(
      `http://localhost:3333/rooms/${params.roomId}/audio`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await response.json();

    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.log(result);
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('O seu navegador nao suporta gravacao');
      return;
    }

    setIsRecording(true);

    // biome-ignore lint/nursery/noShadow: <explanation>
    function createRecorder(audio: MediaStream) {
      recorder.current = new MediaRecorder(audio, {
        mimeType: 'audio/webm',
        audioBitsPerSecond: 64_000,
      });

      recorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          uploadAudio(event.data);
        }
      };

      recorder.current.onstart = () => {
        // biome-ignore lint/suspicious/noConsole: <explanation>
        console.log('gravacao iniciada');
      };

      recorder.current.onstop = () => {
        // biome-ignore lint/suspicious/noConsole: <explanation>
        console.log('gravacao encerrada/pausada');
      };

      recorder.current.start();
    }

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    createRecorder(audio);

    intervalRef.current = setInterval(() => {
      recorder.current?.stop();

      createRecorder(audio);
    }, 5000);
  }

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}> pausar gravadacao</Button>
      ) : (
        <Button onClick={startRecording}>Gravar audio</Button>
      )}
      {isRecording ? <p>Gravado...</p> : <p>Pausado</p>}
    </div>
  );
}
