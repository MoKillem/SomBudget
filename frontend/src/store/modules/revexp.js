
function getObjectDifference(first,second){
    let surplusTot = []
    for(let i = 0; i < first.length; i++){
        let surplus = first[i].revenue - second[i].expenditure
        surplusTot[i] = {year: first[i].year, surplus: surplus }
    }
    return surplusTot
}
const state = {
    revenue : [
        { year: '2015', revenue: 141.2 }, { year: '2016', revenue: 248.3 },
        { year: '2017', revenue: 260.5 }, { year: '2018', revenue: 276.2 },
        { year: '2019', revenue: 390.1 }, { year: '2020', revenue: 466.2 },
    ],
    expenditure : [
        { year: '2015', expenditure: 135.5 }, { year: '2016', expenditure: 248.3 },
        { year: '2017', expenditure: 262.7 }, { year: '2018', expenditure: 268.5 },
        { year: '2019', expenditure: 390.1 }, { year: '2020', expenditure: 476.2 },
    ],
    surplus : []
    
}

const actions = {
     defSurplus ({ commit, state}) {
        commit('setSurplus',getObjectDifference(state.revenue, state.expenditure)) 
    }
}

const mutations = {
    setSurplus: (state,surplusTot) => (state.surplus = surplusTot)
}

const getters = {
    getRevenue: (state) => state.revenue,
    getExpenditure: (state) => state.expenditure,
    getSurplus: (state) => state.surplus
}

export default{
    state,
    getters,
    actions,
    mutations
    
}