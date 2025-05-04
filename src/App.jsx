import React, { useState } from "react";
import { Button, Center, Title, Text, TextInput } from "@mantine/core";
import "@mantine/core/styles.css";
import "./Gambarino/Gambarino.css";
import "./index.css";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("access_key", "1c27e0e6-329d-4ffd-961c-e57cb66a2966");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Thank you for signing up!");
      } else {
        setMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setMessage("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-950 via-green-950 to-emerald-900 min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl h-full items-center justify-center px-4 py-10">
        {/* Left: Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-xl mb-10 lg:mb-0 mr-5">
          <div className="flex flex-row items-center mb-3">
            <Title c="white" className="text-5xl mr-5">
              Beer Belly
            </Title>
            <Text c="white" fs={"italic"} className="text-lg">
              A new way to rate, share, and enjoy your beers.
            </Text>
          </div>
          <Text c="white" mb={22} my={20}>
            Sign up to be notified when our public beta opens, and become one of the first users of Beer Belly.
          </Text>
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <TextInput
              className="text-white"
              placeholder="hello@gmail.com"
              label="Email address"
              size="md"
              withAsterisk
              value={email}
              mb={4}
              w={250}
              onChange={(event) => setEmail(event.currentTarget.value)}
              required
            />
            <Center>
              <Button type="submit" my={10} variant="filled" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Center>
          </form>
          {message && (
            <Text c="white" my={10}>
              {message}
            </Text>
          )}
          <Text c="white" my={30} size={"sm"} fs={"italic"}>
            © 2024 Null Pointer Industries
          </Text>
        </div>
        {/* Right: One Pager Image */}
        <div className="flex-1 flex items-center justify-center w-full">
          <img
            src="./onepage.png"
            alt="Beer Belly One Pager"
            className="rounded-lg shadow-lg max-w-full h-auto object-contain bg-white p-2"
            style={{ maxHeight: '80vh' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
