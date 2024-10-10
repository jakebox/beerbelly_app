import React, { useState } from "react";
import { Button, Title, Text, TextInput } from "@mantine/core";
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
    <div className="bg-gradient-to-r from-teal-950 via-green-950 to-emerald-900 h-screen">
      <div>
        <div className="h-screen flex items-center justify-center px-16 flex-col">
          <div className="flex flex-row items-center mb-3">
            <Title c="white" className="text-5xl mr-5">
              Beer Belly
            </Title>
            <Text c="white" fs={"italic"} className="text-lg">
              A new way to rate, share, and enjoy your beers.
            </Text>
          </div>
          <div className="flex flex-col items-center">
            <Text c="white" mb={22} my={20}>
              Sign up to be notified when our public beta opens, and become one of the first users of Beer Belly.
            </Text>
            <form onSubmit={handleSubmit}>
              <TextInput
                className="text-white"
                placeholder="hello@gmail.com"
                label="Email address"
                size="md"
                withAsterisk
                value={email}
                mb={4}
                onChange={(event) => setEmail(event.currentTarget.value)}
                required
              />
              <Button type="submit" my={10} variant="filled" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
            {message && <Text c="white" my={10}>{message}</Text>}
          </div>
          <Text c="white" my={30} size={"sm"} fs={"italic"}>
            © 2024 Null Pointer Industries
          </Text>
        </div>
      </div>
    </div>
  );
}

export default App;
