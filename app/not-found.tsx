import type { Metadata } from 'next';
import Link from 'next/link';
import { ARROW_RIGHT, Icon } from '@/components/Icons';
import PlumbBob from '@/components/PlumbBob';
import SubHeader from '@/components/SubHeader';

export const metadata: Metadata = { title: 'Page not found — Syreese', description: 'Page not found.' };

export default function NotFound() {
  return (
    <div className="page page-404">
      <SubHeader />
      <main className="main-404">
        <div className="copy-404">
          <span>ERROR 404</span>
          <h1>Nothing framed here yet</h1>
          <p>This page is studs and empty space. Either the link is wrong or I have not hung the drywall on it. Let&apos;s get you back somewhere finished.</p>
          <div className="actions-404">
            <Link href="/" className="btn btn-primary">
              Back home
              <Icon size={13} d={ARROW_RIGHT} />
            </Link>
            <Link href="/archive" className="btn btn-outline">
              See the archive
            </Link>
          </div>
        </div>
        <div className="art-404">
          <PlumbBob />
        </div>
      </main>
    </div>
  );
}
