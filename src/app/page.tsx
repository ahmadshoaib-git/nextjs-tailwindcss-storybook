import { Button } from '@/stories/Button';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Button label={'My Button'} primary size="medium" backgroundColor="#eeff00" />
        </main>
    );
}

