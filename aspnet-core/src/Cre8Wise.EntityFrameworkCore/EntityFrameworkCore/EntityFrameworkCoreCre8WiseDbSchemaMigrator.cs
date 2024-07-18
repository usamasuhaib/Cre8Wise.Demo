using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Cre8Wise.Data;
using Volo.Abp.DependencyInjection;

namespace Cre8Wise.EntityFrameworkCore;

public class EntityFrameworkCoreCre8WiseDbSchemaMigrator
    : ICre8WiseDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreCre8WiseDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the Cre8WiseDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<Cre8WiseDbContext>()
            .Database
            .MigrateAsync();
    }
}
