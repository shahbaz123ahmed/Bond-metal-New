"use client";

import { Award, Shield, Clock, Users, Target, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "15+", label: "Years of Experience", icon: Clock },
    { number: "50+", label: "Expert Team Members", icon: Users },
    { number: "100%", label: "Client Satisfaction", icon: Award },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards of quality in every project, ensuring precision and durability in all our metal fabrication work.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Safety is our top priority. We follow strict safety protocols and industry standards to protect our team and clients.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We leverage cutting-edge technology and innovative techniques to deliver superior results and stay ahead of industry trends.",
    },
    {
      icon: Users,
      title: "Client Focus",
      description:
        "Our client-centric approach ensures personalized service, clear communication, and projects delivered on time and within budget.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-slate-900 text-white pt-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-orange-500">Bond Metal</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leading the way in precision metal fabrication across Dubai and the UAE,
            delivering excellence through innovation, quality, and unmatched expertise.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-16 bg-slate-800 p-8 rounded-2xl border border-slate-700">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Bond Metal Fabrication LLC was founded in 2009 with a vision to revolutionize
            the metal fabrication industry in Dubai. Starting as a small workshop with big
            dreams, we have grown into one of the region&apos;s most trusted names in precision
            metalwork.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our journey has been marked by continuous innovation, strategic investments in
            cutting-edge technology, and an unwavering commitment to quality that has earned
            us the trust of clients across diverse industries including construction,
            automotive, aerospace, and architectural sectors.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-orange-500 transition-colors"
              >
                <Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our{" "}
            <span className="text-orange-500">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors"
                >
                  <Icon className="w-16 h-16 text-orange-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="leading-relaxed">
              To deliver exceptional metal fabrication solutions that exceed
              client expectations through precision craftsmanship, innovative
              technology, and unwavering commitment to quality and safety.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To be the Middle East&apos;s most trusted and innovative metal
              fabrication company, setting industry standards for quality,
              reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}