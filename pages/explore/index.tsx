import Hello from "@/components/pages/dashboard/hello.component";
import DashboardLayput from "../dashboard/layout";
import SearchView from "@/components/pages/explore/search-view.component";
import Head from "next/head";
import SelectCategory from "@/components/pages/explore/category-select.component";
import ListOfConsultants from "@/components/pages/explore/list-of-consultants.component";

const Explore = () => {
    return ( 
        <>
        <Head>
            <title>Explore - Carsle</title>
        </Head>
        <DashboardLayput>
            <Hello/>
            <SearchView/>
            <SelectCategory/>
            <ListOfConsultants/>
        </DashboardLayput>
        </>
    );
}
export default Explore;