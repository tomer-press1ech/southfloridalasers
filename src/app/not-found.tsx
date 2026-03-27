import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LaserBeam } from "@/components/effects/LaserBeam";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p className="text-8xl font-bold text-laser-blue mb-4">404</p>
          <LaserBeam color="blue" className="mb-8" />
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p className="text-text-secondary mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="md">
              Go Home
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
