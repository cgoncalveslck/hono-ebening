import { Layout } from "./Layout";
import type { Sound } from '../types/Global.d.ts'
import { Footer } from "../components/Footer";

export const Home = ({ sounds }: { sounds: Sound[] }) => {
  return (
    <Layout title="Home Page">
      <>
        <div class="my-10 shadow-lg shadow-xl shadow-slate-950/50 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th style="width:15%" scope="col" class="px-6 py-3">
                  Sound name
                </th>
                <th scope="col" class="px-6 py-3">
                  Preview
                </th>
                <th style="width:5%" scope="col" class="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sounds.map((sound) => (
                <tr>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {sound.name.split('.')[0]}
                  </th>
                  <td class="px-6 py-4">
                    <audio preload="metadata" controls class="w-full">
                      <source src={sound.source} type="audio/mpeg" />
                    </audio>
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </>
    </Layout >
  );
}




