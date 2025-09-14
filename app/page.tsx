import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <Card className="w-96">
        <CardContent>
          <h1 className="text-xl font-bold mb-4">Hello Next.js 🚀</h1>
          <p className="mb-4">This is your card component working correctly.</p>
          <Button variant="default">Click Me</Button>
        </CardContent>
      </Card>
    </main>
  )
}
