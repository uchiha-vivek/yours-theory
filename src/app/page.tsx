import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <HeroSection/>
        {/* Content */}
        <h1 className="text-3xl font-bold mb-8">Recent Topics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            imageUrl="https://via.placeholder.com/400x200"
            dateTime="August 15, 2024, 10:00 AM"
            topicName="Exploring the Wonders of AI"
            topicDescription="Dive into the fascinating world of Artificial Intelligence and explore its impact on modern technology."
            personName="John Doe"
            personImage="https://via.placeholder.com/150"
          />
          <Card
            imageUrl="https://via.placeholder.com/400x200"
            dateTime="August 14, 2024, 2:00 PM"
            topicName="The Future of Web Development"
            topicDescription="A comprehensive overview of the latest trends and technologies shaping the future of web development."
            personName="Jane Smith"
            personImage="https://via.placeholder.com/150"
          />
             <Card
            imageUrl="https://via.placeholder.com/400x200"
            dateTime="August 14, 2024, 2:00 PM"
            topicName="The Future of Web Development"
            topicDescription="A comprehensive overview of the latest trends and technologies shaping the future of web development."
            personName="Jane Smith"
            personImage="https://via.placeholder.com/150"
          />
          {/* Add more Card components as needed */}
        </div>
      </main>
      <Footer />
    </>
  );
}
