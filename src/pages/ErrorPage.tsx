import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  function isError(error: any): error is { statusText: string } {
    return "statusText" in error;
  }

  return (
    <div className="text-center p-5">
      No blad.
      {
        
        isError(error) && <p>{error.statusText}</p>
      }
    </div>
  );
}
