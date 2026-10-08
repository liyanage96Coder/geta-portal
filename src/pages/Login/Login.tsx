import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../../components/Logo/Logo";
import { login } from "../../api/authApi";
import * as S from "./Styles";

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login = ({ onLoginSuccess }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await login({
        email,
        password,
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      onLoginSuccess();
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Page>
      <S.Aside>
        <S.BrandRow>
          <S.BrandText>
            <Logo />
          </S.BrandText>
        </S.BrandRow>

        <S.Hero>
          <S.HeroTitle>Welcome back</S.HeroTitle>
          <S.HeroText>
            Sign in to manage your account and pick up right where you left off.
          </S.HeroText>
        </S.Hero>

        <S.Copyright>
          © {new Date().getFullYear()} Geta. All rights reserved.
        </S.Copyright>

        <S.CircleTop />
        <S.CircleBottom />
      </S.Aside>

      <S.Main>
        <S.Content>
          <S.MobileBrand>
            <Logo />
            <S.MobileBrandName>Geta</S.MobileBrandName>
          </S.MobileBrand>
          <Logo />
          <S.Title>Welcome Back!</S.Title>
          <S.Subtitle>
            Enter your credentials to access your account.
          </S.Subtitle>

          <S.Form onSubmit={handleSubmit}>
            <S.Field>
              <S.Label htmlFor="email">Email Address</S.Label>
              <S.Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
              />
            </S.Field>

            <S.Field>
              <S.Label htmlFor="password">Password</S.Label>
              <S.PasswordWrapper>
                <S.PasswordInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <S.ToggleButton
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </S.ToggleButton>
              </S.PasswordWrapper>
            </S.Field>

            {error && <S.ErrorMessage role="alert">{error}</S.ErrorMessage>}

            <S.SubmitButton type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </S.SubmitButton>
          </S.Form>
        </S.Content>
      </S.Main>
    </S.Page>
  );
};

export default Login;
