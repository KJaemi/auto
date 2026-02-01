import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-max py-24">
      <div className="card p-10 text-center">
        <p className="text-sm text-white/60">404</p>
        <h1 className="mt-2 text-3xl font-extrabold">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4 text-white/70">주소가 잘못되었거나, 이동된 페이지일 수 있습니다.</p>
        <div className="mt-8">
          <Link href="/" className="btn-primary">홈으로</Link>
        </div>
      </div>
    </div>
  );
}
