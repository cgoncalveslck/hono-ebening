export const Footer = () => {
  return (
    <div style="position: absolute; bottom: 10" class="container mx-auto shadow-md bg-transparent text-white">
      <div class="bg-gray-800 rounded-xl p-2">
        <div id="form-wrapper">
          <iframe name="void" style="display:none;"></iframe>
          <form style="margin: 0" id="form" target="void" class="flex items-center gap-4" action="upload" method="post">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
              for="file-upload">
              Upload File
            </label>
            <input required type="file" id="file-upload" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-slate-700 hover:file:bg-slate-300" />
            <button
              type="submit"
              class="py-2 px-5 ml-4 text-sm font-medium text-gray-900 focus:outline-none rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}